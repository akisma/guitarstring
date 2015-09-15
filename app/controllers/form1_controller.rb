class Form1Controller < ApplicationController
  skip_before_filter  :verify_authenticity_token
  def index
    @form1s = Form1.all
    @form1 ||= Form1.create(cats: 1, dog: "Your moms moms mom")
    render json: @form1
  end

  def show
    @form1 = Form1.find(params[:id])
  end

  def create
    @form1 = Form1.create(cats: params[:cat], dog: params[:dog])
    @form1s = Form1.all
    render json: @form1
  end

  def destory
    @deleted = Form1.find(params[:id]).destroy
    @form1 = Form1.first
    render :show
  end
end
