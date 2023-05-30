class UsersController < ApplicationController
  def index
    if params[:query]
      split_query = params[:query].split(' '***REMOVED***
      if split_query.length > 1
        # Case when both first name and last name are typed
        @users = User.where('lower(fname***REMOVED*** LIKE :first AND lower(lname***REMOVED*** LIKE :last', 
                            first: "#{split_query.first.downcase***REMOVED***%", 
                            last: "#{split_query.last.downcase***REMOVED***%"***REMOVED***
      else
        # Case when either first name, last name, or email is typed
        @users = User.where('lower(fname***REMOVED*** LIKE :query OR lower(lname***REMOVED*** LIKE :query OR lower(email***REMOVED*** LIKE :query', 
                            query: "%#{params[:query].downcase***REMOVED***%"***REMOVED***
      end
    else
      @users = User.all
    end
  end

end
