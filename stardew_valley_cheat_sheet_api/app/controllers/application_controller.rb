class ApplicationController < ActionController::API
 
    before_action :authorized

    
      def decoded_token
        if auth_header
          token = auth_header.split(' ')[1]
          begin
           @user_id = JWT.decode(token, Rails.applications.secrets.secret_key_base[0][0]["user_id"])
          rescue JWT::DecodeError
            nil
          end
        end
      end

      def current_user
        auth_header = request.headers["Authorization"]
        if auth_header
            user_token = auth_header.split(" ")[1]
            begin
                @user_id = JWT.decode(user_token, Rails.application.secrets.secret_key_base[0])[0]["user_id"]
            rescue JWT::DecodeError 
                nil
            end
        end
        if(@user_id)
            @user = User.find(@user_id)
        else 
            nil
        end
    end
    
      def logged_in?
        !!current_user
      end

      def authorized
        render json: { message: 'Please log in or signup' }, status: :unauthorized unless logged_in?
      end
end