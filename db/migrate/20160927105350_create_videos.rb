class CreateVideos < ActiveRecord::Migration[5.0]
  def change
    create_table :videos do |t|
      t.text :url
      t.string :sign_for

      t.timestamps
    end
  end
end
