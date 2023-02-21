# Puma can serve each request in a thread from an internal thread pool.
# The `threads` method setting takes two numbers: a minimum and maximum.
# Any libraries that use thread pools should be configured to match
# the maximum value specified for Puma. Default is set to 5 threads for minimum
# and maximum; this matches the default thread size of Active Record.
#
max_threads_count = ENV.fetch("RAILS_MAX_THREADS"***REMOVED*** { 5 ***REMOVED***
min_threads_count = ENV.fetch("RAILS_MIN_THREADS"***REMOVED*** { max_threads_count ***REMOVED***
threads min_threads_count, max_threads_count

# Specifies the `worker_timeout` threshold that Puma will use to wait before
# terminating a worker in development environments.
#
worker_timeout 3600 if ENV.fetch("RAILS_ENV", "development"***REMOVED*** == "development"

# Specifies the `port` that Puma will listen on to receive requests; default is 3000.
#
port ENV.fetch("PORT"***REMOVED*** { 3000 ***REMOVED***

# Specifies the `environment` that Puma will run in.
#
environment ENV.fetch("RAILS_ENV"***REMOVED*** { "development" ***REMOVED***

# Specifies the `pidfile` that Puma will use.
pidfile ENV.fetch("PIDFILE"***REMOVED*** { "tmp/pids/server.pid" ***REMOVED***

# Specifies the number of `workers` to boot in clustered mode.
# Workers are forked web server processes. If using threads and workers together
# the concurrency of the application would be max `threads` * `workers`.
# Workers do not work on JRuby or Windows (both of which do not support
# processes***REMOVED***.
#
# workers ENV.fetch("WEB_CONCURRENCY"***REMOVED*** { 2 ***REMOVED***

# Use the `preload_app!` method when specifying a `workers` number.
# This directive tells Puma to first boot the application and load code
# before forking the application. This takes advantage of Copy On Write
# process behavior so workers use less memory.
#
# preload_app!

# Allow puma to be restarted by `rails restart` command.
plugin :tmp_restart
