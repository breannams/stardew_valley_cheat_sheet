class UsersController < ApplicationController
   skip_before_action :authorized, only: [:create, :index, :login]

   def user_profile
    render json: @user
   end


   def index
    user = User.all 
    render json: user

   end

   def create
    @user = User.create(user_params)
 
  render json: @user, status: :created
  end

  def login
    @user = User.find_by(username: params[:user][:username])

    if @user && @user.authenticate(params[:user][:password])
   
      @token = JWT.encode({user_id: @user.id}, Rails.application.secrets.secret_key_base[0])
      render json: {user: @user, token: @token}
    else
      render json: {error: "Invalid username or password"}
    end
  #  byebug
  end


  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :admin, :id)
  end
end
