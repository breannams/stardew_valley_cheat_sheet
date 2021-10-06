class UsersController < ApplicationController
   skip_before_action :authorized, only: [:create, :index, :login, :show]
   before_action :set_user, only: %i[ show ]

   def user_profile
    render json: @user
   end


   def index
    user = User.all 
    render json: user

   end

   def show
   end

   

   def create
    @user = User.create(user_params)
    if @user.valid?
      @payload = {user_id: @user.id}
      @token = encode_token(@payload)
       render json: {user: @user, jwt: @token},status: :created
 
    end
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

    def set_user
      @user = User.find(params[:id])
    end

  def user_params
    params.require(:user).permit(
      :username, :email, :password, :admin, :id,
    farm_attributes: [:farm_name, :farm_type, :pet_type]
    
    )
  end
end
