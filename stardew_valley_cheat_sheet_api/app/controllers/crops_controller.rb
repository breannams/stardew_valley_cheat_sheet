class CropsController < ApplicationController
  # before_action :set_crop, only: %i[ show edit update destroy ]
  skip_before_action :authorized
  # GET /crops or /crops.json
  def index
    crops = Crop.all
    render json: crops
  end

  # GET /crops/1 or /crops/1.json
  # def show
  # end

  # GET /crops/new
  def new
    crop = Crop.new
  end

  # GET /crops/1/edit
  # def edit
  # end

  # POST /crops or /crops.json
  def create
    crop = Crop.new(crop_params)

      if crop.save
        json { render :show, status: :created, location: crop }
      else
        json { render json: crop.errors, status: :unprocessable_entity }
      end
    
  end

  # # PATCH/PUT /crops/1 or /crops/1.json
  # def update
  #   respond_to do |format|
  #     if @crop.update(crop_params)
  #       format.html { redirect_to @crop, notice: "Crop was successfully updated." }
  #       format.json { render :show, status: :ok, location: @crop }
  #     else
  #       format.html { render :edit, status: :unprocessable_entity }
  #       format.json { render json: @crop.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # # DELETE /crops/1 or /crops/1.json
  # def destroy
  #   @crop.destroy
  #   respond_to do |format|
  #     format.html { redirect_to crops_url, notice: "Crop was successfully destroyed." }
  #     format.json { head :no_content }
  #   end
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_crop
    #   @crop = Crop.find(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    def crop_params
      params.require(:crop).permit(:name, :season, :grow, :time, :sell_price, :uses, :cost)
    end
end
