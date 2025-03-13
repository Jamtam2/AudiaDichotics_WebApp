class TermsOfServiceController < ApplicationController
    def index
        render :index
    end

    def accepted
        if current_user.update(terms_accepted: true)
            redirect_to root_path, notice: "You have accepted the terms of service."
        end
    end
end
