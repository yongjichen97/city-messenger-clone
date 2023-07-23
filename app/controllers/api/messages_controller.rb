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
        params.require(:message).permit(:content, :sender, :receiver, :timestamp)
    end
end