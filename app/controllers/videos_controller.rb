class VideosController < ApplicationController
  def new
    @video = Video.new
  end

  def create
      @video = Video.new
      if (params[:file]).present?
        req = Cloudinary::Uploader.upload(params[:file],:resource_type => :video)
        # req = Cloudinary::Uploader.upload(params[:file])
        @video.url = req["url"]
      end
      @video.sign_for = (params[:video][:sign_for]).downcase
      if @video.save
        redirect_to root_path
      else
        render :new
      end
  end

  def index
    @videos = Video.all
  end

  def show
    @video = Video.find params[:id]
  end

  def search_video
    message = params[:content]
    words = message.downcase.split(' ')
    p words
    video_urls = []
    video_words = []
    words.each do |word|
      video = Video.find_by(:sign_for => word)
      if video.present?
        p 'if'
       video_urls.push(video.url)
       video_words.push(word)
      else
        p 'else'
       letters = word.split('')
       l_video_urls =[]
       l_video_words = []
       letters.each do |l|
         l_video = Video.find_by(:sign_for => l)
         if l_video.present?
           p 'else if'
           l_video_urls.push(l_video.url)
           l_video_words.push(l)
         end
       end
       video_urls.push(l_video_urls)
       video_words.push(l_video_words)
     end
    end
    # binding.pry
    video_urls.flatten!
    video_words.flatten!
    video_details = [video_urls,video_words ]
    render :json => video_details, :status => :ok
  end

  def edit
  end
end
