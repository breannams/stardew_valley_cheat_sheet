class AnimalsController < ApplicationController
skip_before_action :authorized

  # GET /animals or /animals.json
  def index
    animals = Animal.all
    render json: animals
  end

  # GET /animals/1 or /animals/1.json
  # def show
  # end

  # GET /animals/new
  def new
    animal = Animal.new
  end

  # GET /animals/1/edit
  # def edit
  # end

  # POST /animals or /animals.json
  def create
    animal = Animal.new(animal_params)

      if animal.save
       json { render :show, status: :created, location: animal }
      else
       json { render json: animal.errors, status: :unprocessable_entity }
      end
    
  end

  # PATCH/PUT /animals/1 or /animals/1.json
  # def update
  #   respond_to do |format|
  #     if @animal.update(animal_params)
  #       format.html { redirect_to @animal, notice: "Animal was successfully updated." }
  #       format.json { render :show, status: :ok, location: @animal }
  #     else
  #       format.html { render :edit, status: :unprocessable_entity }
  #       format.json { render json: @animal.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # DELETE /animals/1 or /animals/1.json
  # def destroy
  #   @animal.destroy
  #   respond_to do |format|
  #     format.html { redirect_to animals_url, notice: "Animal was successfully destroyed." }
  #     format.json { head :no_content }
  #   end
  # end

  private
    # # Use callbacks to share common setup or constraints between actions.
    # def set_animal
    #   @animal = Animal.find(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    def animal_params
      params.require(:animal).permit(:name, :img, :cost, :requirements, :produce, :sell_price)
    end
end
