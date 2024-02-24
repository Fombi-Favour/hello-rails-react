class GreetingsController < ApplicationController
  def index
    @random_greeting = Greeting.order('RANDOM()').first
    if @random_greeting
      render json: { greeting: @random_greeting.greeting }
    else
      render json: { error: 'No greetings available' }, status: :not_found
    end
  end
end
