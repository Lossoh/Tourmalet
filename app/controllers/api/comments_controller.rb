class Api::CommentsController < ApplicationController

  def create
    @comment = @current_user.comments.new(comment_params)

    if @comment.save
      render '/api/activities/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy

  end

  private

  def comment_params
    params.require(:comment).permit(:content, :activityId, :authorId)
  end
end
