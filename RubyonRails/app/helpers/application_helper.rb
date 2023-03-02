module ApplicationHelper
    def active_class(path***REMOVED***
        if request.path == path
            return 'active'
        else
            return ''
        end
    end
end
