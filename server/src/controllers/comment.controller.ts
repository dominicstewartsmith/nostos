"use strict";
import { Context } from 'koa';
import db from '../models/db';
import { Comment } from '../../server-types/types';

export async function addNewComment(ctx: Context): Promise<void> {
  const { commenterId, content } = <Comment> ctx.request.body;
  // console.log('Creating new comment.');
  try {
    const comment = await db.comment.upsert({
      where: {
        commenterId_entryId: {
          commenterId: commenterId,
          entryId: Number(ctx.params.entryId)
        }
        }
      ,
      update: {
        content: content
      },
      create: {
        commenterId,
        entryId: Number(ctx.params.entryId),
        content
      }
    });
  
    ctx.status = 201;
    ctx.response.body = 'Created';
  } catch (error) {
    console.log('Error creating comment.\n', `CommenterId: ${commenterId}\nEntryId: ${ctx.params.entryId}\nContent:${content}`);
    console.log(error);
  }
}

export async function getAllCommentsByEntry(ctx: Context): Promise<void> {
  // console.log('Getting all comments for entry.');
  try {
    const comments = await db.comment.findMany({
      where: {
        entryId: Number(ctx.params.entryId)
      }
    });
    ctx.response.status = 200;
    ctx.response.body = comments;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteComment(ctx: Context): Promise<void> {
  // console.log('Deleting comment.');
  try {
    await db.comment.delete({
      where: {
        commenterId_entryId: {
          commenterId: Number(ctx.params.commenterId),
          entryId: Number(ctx.params.entryId)
        }
      }
    });
    ctx.response.status = 200;
    ctx.response.body = 'Deleted';
  } catch (error) {
    console.log(error);
  }
}