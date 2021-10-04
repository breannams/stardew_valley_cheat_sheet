class StardewvalleysController < ApplicationController
  before_action :set_stardewvalley, only: %i[ show edit update destroy ]
  skip_before_action :authorized
  # GET /stardewvalleys or /stardewvalleys.json
  def index
    @stardewvalleys = Stardewvalley.all
  end

  # GET /stardewvalleys/1 or /stardewvalleys/1.json
  def show
  end

  # GET /stardewvalleys/new
  def new
    @stardewvalley = Stardewvalley.new
  end

  # GET /stardewvalleys/1/edit
  def edit
  end

  # POST /stardewvalleys or /stardewvalleys.json
  def create
    @stardewvalley = Stardewvalley.new(stardewvalley_params)

    respond_to do |format|
      if @stardewvalley.save
        format.html { redirect_to @stardewvalley, notice: "Stardewvalley was successfully created." }
        format.json { render :show, status: :created, location: @stardewvalley }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @stardewvalley.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /stardewvalleys/1 or /stardewvalleys/1.json
  def update
    respond_to do |format|
      if @stardewvalley.update(stardewvalley_params)
        format.html { redirect_to @stardewvalley, notice: "Stardewvalley was successfully updated." }
        format.json { render :show, status: :ok, location: @stardewvalley }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @stardewvalley.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /stardewvalleys/1 or /stardewvalleys/1.json
  def destroy
    @stardewvalley.destroy
    respond_to do |format|
      format.html { redirect_to stardewvalleys_url, notice: "Stardewvalley was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_stardewvalley
      @stardewvalley = Stardewvalley.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def stardewvalley_params
      params.require(:stardewvalley).permit(
        :name,
        animals_attributes: [:name, :cost, :requirements, :produce, :sell_price],
        buildings_attributes: [:name, :cost, :use],
        crops_attributes: [:name, :season, :grow_time, :sell_price, :uses, :cost],
        festivals_attributes: [:name, :date, :time_location, :description, :purchases],
        quests_attributes: [:quest_type, :name, :description, :started_by,:requirements, :rewards, :completed],
        villagers: [:name, :birthday, :gifts, :hearts, :heartevents, :marriage]
        )
    end
end
