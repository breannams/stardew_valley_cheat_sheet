class FestivalsController < ApplicationController
  # before_action :set_festival, only: %i[ show edit update destroy ]
  skip_before_action :authorized
  # GET /festivals or /festivals.json
  def index
    festivals = Festival.all
    render json: festivals
  end

  # GET /festivals/1 or /festivals/1.json
  # def show
  # end

  # GET /festivals/new
  def new
    festival = Festival.new
  end

  # GET /festivals/1/edit
  # def edit
  # end

  # POST /festivals or /festivals.json
  def create
    festival = Festival.new(festival_params)

      if festival.save
        json { render :show, status: :created, location: festival }
      else
        json { render json: festival.errors, status: :unprocessable_entity }
      end

  end

  # PATCH/PUT /festivals/1 or /festivals/1.json
  # def update
  #   respond_to do |format|
  #     if @festival.update(festival_params)
  #       format.html { redirect_to @festival, notice: "Festival was successfully updated." }
  #       format.json { render :show, status: :ok, location: @festival }
  #     else
  #       format.html { render :edit, status: :unprocessable_entity }
  #       format.json { render json: @festival.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # DELETE /festivals/1 or /festivals/1.json
  # def destroy
  #   @festival.destroy
  #   respond_to do |format|
  #     format.html { redirect_to festivals_url, notice: "Festival was successfully destroyed." }
  #     format.json { head :no_content }
  #   end
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_festival
    #   @festival = Festival.find(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    def festival_params
      params.require(:festival).permit(:name, :date, :time_location, :description, :purchases)
    end
end
