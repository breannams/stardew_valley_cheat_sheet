class UsersController < ApplicationController
   skip_before_action :authorized, only: [:create, :index]

   def index
    user = User.all 
    render json: user

   end

   def create
    @user = User.create(user_params)
    if @user.valid?
      @token = encode_token(user_id: @user.id)
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :unprocessable_entity
    end
   # byebug
  end

  def login
    @user = User.find_by(username: params[:username])

    if @user && @user.authenticate(params[:password])
      token = encode_token({user_id: @user.id})
      render json: {user: @user, token: token}
    else
      render json: {error: "Invalid username or password"}
    end
  end


  def auto_login
    render json: @user
  end


  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :admin, :id)
  end
end
