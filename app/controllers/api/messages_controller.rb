class Api::MessagesController < ApplicationController
    def index
      @messages = Message.all
      render json: @messages
    end
  
    def create
      @message = Message.new(message_params)
      @message.timestamp = Time.zone.now # Set the timestamp to the current time
      if @message.save!
        render json: @message, status: :created
      else
        render json: { error: @message.errors.full_messages.join(', ') }, status: :unprocessable_entity
    end
    end
  
    def destroy
      @message = Message.find(params[:id])
      @message.destroy
      head :no_content
    end
  
    private
  
    def message_params
        params.require(:message).permit(:content, :sender, :receiver, :timestamp, :session_id)
    end

    def messages_by_session
        session_id = params[:session_id]
        @messages = Message.where(session_id: session_id)
  
        render json: @messages
    end
end