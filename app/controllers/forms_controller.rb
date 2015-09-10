class FormsController < ApplicationController
    def show
        @form = Form.find_by(name: "example")
        render json: @form
    end

    def create
    end
end
