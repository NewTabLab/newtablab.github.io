# -*- encoding: utf-8 -*-
require "bundler/setup"
require "rake/remote_task"

# remote configuration
# ----------------------------------------------------------------------------
name_of_the_project = "newtablab.com"

remote_host = "46.101.190.199"
remote_user = "deployer"
remote_path = "/home/#{remote_user}/www/newtablab.com/"
set :ssh_flags, ["-l", "#{remote_user}"]
set :sudo_flags, sudo_flags << '-S'
set :sass_source, "./site_media/css/layout.scss"
set :sass_destination, "./site_media/css/layout.css"
set :sass_style, "compressed"

host "#{remote_host}", :remote_app
# ----------------------------------------------------------------------------

task :default => ["preview"]

desc "Start preview"
task :preview do
    sass = Process.spawn("sass --watch #{sass_source}:#{sass_destination} --style #{sass_style}")
    http_server = Process.spawn("source config/server.sh && server")
    trap("INT") {
      [sass, http_server].each { |pid| Process.kill(9, pid) rescue Errno::ESRCH }
      exit 0
    }
    [sass, http_server].each { |pid| Process.wait(pid) }
end

desc "Deploy"
remote_task :deploy do
  if is_repo_clean?
    run %{
      cd #{remote_path}
      git pull
    }
    puts "Deployment completed"
  else
    puts "Please commit your changes first!"
  end
end

def is_repo_clean?
  current_branch = `git rev-parse --abbrev-ref HEAD`.strip
  any_changes = `git status -s | wc -l`.strip.to_i
  if any_changes == 0
    need_push = `git status 2>/dev/null`.scan(/(behind|ahead).+ by (\d+)/)
    if need_push.empty?
      return true
    else
      return false
    end
  else
    return false
  end
end
