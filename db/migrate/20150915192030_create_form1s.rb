class CreateForm1s < ActiveRecord::Migration
  def change
    create_table :form1s do |t|
      t.integer :cats
      t.string :dog

      t.timestamps null: false
    end
  end
end
