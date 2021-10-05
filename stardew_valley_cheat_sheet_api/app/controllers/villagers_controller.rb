class VillagersController < ApplicationController
  before_action :set_villager, only: %i[ show edit update destroy ]
   skip_before_action :authorized
  # GET /villagers or /villagers.json
  def index
    @villagers = Villager.all
    render json: @villagers
  end

  # GET /villagers/1 or /villagers/1.json
  def show
  end

  # GET /villagers/new
  def new
    @villager = Villager.new
  end

  # GET /villagers/1/edit
  def edit
  end

  # POST /villagers or /villagers.json
  def create
    @villager = Villager.new(villager_params)

    respond_to do |format|
      if @villager.save
        format.html { redirect_to @villager, notice: "Villager was successfully created." }
         format.json { render :show, status: :created, location: @villager }
      else
        format.html { render :new, status: :unprocessable_entity }
         format.json { render json: @villager.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /villagers/1 or /villagers/1.json
  def update
    respond_to do |format|
      if @villager.update(villager_params)
        format.html { redirect_to @villager, notice: "Villager was successfully updated." }
        format.json { render :show, status: :ok, location: @villager }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @villager.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /villagers/1 or /villagers/1.json
  def destroy
    @villager.destroy
    respond_to do |format|
      format.html { redirect_to villagers_url, notice: "Villager was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_villager
      @villager = Villager.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def villager_params
      params.require(:villager).permit(:name, :birthday, :gifts, :hearts, :heartevents, :marriage, :img)
    end
end
