class Form2Controller < ApplicationController
  skip_before_filter  :verify_authenticity_token
  def index
    @form2s = Form2.all
    @form2 ||= Form2.create(cats: 1, dog: "Your moms moms mom")
    render json: @form2
  end

  def show
    @form2 = Form2.find(params[:id])
  end

  def create
    @form2 = Form2.create(cats: params[:cat], dog: params[:dog])
    @form2s = Form2.all
    render json: @form2
  end

  def destory
    @deleted = Form2.find(params[:id]).destroy
    @form2 = Form2.first
    render :show
  end
end
