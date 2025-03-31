class TrainingsController < ApplicationController
    def index
        @client= Client.find(params[:client_id])
        @trainings = Training.all
        render :index
    end
    def show
        @client= Client.find(params[:client_id])
        @training= @client.trainings.find(params[:id])
        render :show
    end
    def export
        @client = Client.find(params[:client_id])
        @trainings = Training.all
        p = Axlsx::Package.new
        wb = p.workbook
        wb.add_worksheet(name: "Week One") do |sheet|
            sheet.add_row ["Test Number", "Client name", "Test type", "Left Ear Decibel Level", "Right Ear Decibel Level", "Left Ear Percentage Score", "Right Ear Percentage Score", "Ear Advantage Score"]
            rddt_dec_left = []
            rddt_dec_right = []
            word_dec_left = []
            word_dec_right = []
            rddt_score_left = []
            rddt_score_right = []
            word_score_left = []
            word_score_right = []
            rddt_ear_adv_score = []
            word_ear_adv_score = []
            @client.week_ones.each do |week_one|
                if week_one.test_type == "RDDT"
                    sheet.add_row [week_one.id, week_one.client_name, week_one.test_type, week_one.left_ear_decibel, week_one.right_ear_decibel, week_one.left_score, week_one.right_score, week_one.ear_advantage_score]
                    rddt_dec_left << week_one.left_ear_decibel if week_one.left_ear_decibel
                    rddt_dec_right << week_one.right_ear_decibel if week_one.right_ear_decibel
                    rddt_score_left << week_one.left_score if week_one.left_score
                    rddt_score_right << week_one.right_score if week_one.right_score
                    rddt_ear_adv_score << week_one.ear_advantage_score if week_one.ear_advantage_score
                end
            end
            sheet.add_row [nil, nil, nil, "Average Left Ear Decibel Level (DIGITS)", "Average Right Ear Decibel Level (DIGITS)", "Average Left Ear Percentage Score (DIGITS)", "Average Right Ear Percentage Score (DIGITS)", "Average Ear Advantage Score (DIGITS)"]
            sheet.add_row [nil,nil, nil, rddt_dec_left.sum/ rddt_score_left.size.to_f, rddt_dec_right.sum/ rddt_score_right.size.to_f,  rddt_score_left.sum / rddt_score_left.size.to_f, rddt_score_right.sum / rddt_score_right.size.to_f, rddt_ear_adv_score.sum / rddt_ear_adv_score.size.to_f]
            @client.week_ones.each do |week_one|
                if week_one.test_type != "RDDT"
                    sheet.add_row [week_one.id, week_one.client_name, week_one.test_type, week_one.left_ear_decibel, week_one.right_ear_decibel, week_one.left_score, week_one.right_score, week_one.ear_advantage_score]   
                    word_dec_left << week_one.left_ear_decibel if week_one.left_ear_decibel
                    word_dec_right << week_one.left_ear_decibel if week_one.left_ear_decibel
                    word_score_left << week_one.left_score if week_one.left_score
                    word_score_right << week_one.right_score if week_one.right_score
                    word_ear_adv_score << week_one.ear_advantage_score if week_one.ear_advantage_score
                end
            end
            sheet.add_row [nil, nil, nil, "Average Left Ear Decibel Level (WORDS)", "Average Right Ear Decibel Level (WORDS)", "Average Left Ear Percentage Score (WORDS)", "Average Right Ear Percentage Score (WORDS)", "Average Ear Advantage Score (WORDS)"]
            sheet.add_row [nil,nil, nil, word_dec_left.sum/ word_score_left.size.to_f, word_dec_right.sum/ word_score_right.size.to_f,  word_score_left.sum / word_score_left.size.to_f, word_score_right.sum / word_score_right.size.to_f, word_ear_adv_score.sum / word_ear_adv_score.size.to_f]
        end
        wb.add_worksheet(name: "Week Two") do |sheet|
            sheet.add_row ["Test Number", "Client name", "Test type", "Left Ear Decibel Level", "Right Ear Decibel Level", "Left Ear Percentage Score", "Right Ear Percentage Score", "Ear Advantage Score"]
            rddt_dec_left = []
            rddt_dec_right = []
            word_dec_left = []
            word_dec_right = []
            rddt_score_left = []
            rddt_score_right = []
            word_score_left = []
            word_score_right = []
            rddt_ear_adv_score = []
            word_ear_adv_score = []
            @client.week_twos.each do |week_two|
                if week_two.test_type == "RDDT"
                    sheet.add_row [week_two.id, week_two.client_name, week_two.test_type, week_two.left_ear_decibel, week_two.right_ear_decibel, week_two.left_score, week_two.right_score, week_two.ear_advantage_score]
                    rddt_dec_left << week_two.left_ear_decibel if week_two.left_ear_decibel
                    rddt_dec_right << week_two.right_ear_decibel if week_two.right_ear_decibel
                    rddt_score_left << week_two.left_score if week_two.left_score
                    rddt_score_right << week_two.right_score if week_two.right_score
                    rddt_ear_adv_score << week_two.ear_advantage_score if week_two.ear_advantage_score
                end
            end
            sheet.add_row [nil, nil, nil, "Average Left Ear Decibel Level (DIGITS)", "Average Right Ear Decibel Level (DIGITS)", "Average Left Ear Percentage Score (DIGITS)", "Average Right Ear Percentage Score (DIGITS)", "Average Ear Advantage Score (DIGITS)"]
            sheet.add_row [nil,nil, nil, rddt_dec_left.sum/ rddt_score_left.size.to_f, rddt_dec_right.sum/ rddt_score_right.size.to_f,  rddt_score_left.sum / rddt_score_left.size.to_f, rddt_score_right.sum / rddt_score_right.size.to_f, rddt_ear_adv_score.sum / rddt_ear_adv_score.size.to_f]
            @client.week_twos.each do |week_two|
                if week_two.test_type != "RDDT"
                    sheet.add_row [week_two.id, week_two.client_name, week_two.test_type, week_two.left_ear_decibel, week_two.right_ear_decibel, week_two.left_score, week_two.right_score, week_two.ear_advantage_score]   
                    word_dec_left << week_two.left_ear_decibel if week_two.left_ear_decibel
                    word_dec_right << week_two.left_ear_decibel if week_two.left_ear_decibel
                    word_score_left << week_two.left_score if week_two.left_score
                    word_score_right << week_two.right_score if week_two.right_score
                    word_ear_adv_score << week_two.ear_advantage_score if week_two.ear_advantage_score
                end
            end
            sheet.add_row [nil, nil, nil, "Average Left Ear Decibel Level (WORDS)", "Average Right Ear Decibel Level (WORDS)", "Average Left Ear Percentage Score (WORDS)", "Average Right Ear Percentage Score (WORDS)", "Average Ear Advantage Score (WORDS)"]
            sheet.add_row [nil,nil, nil, word_dec_left.sum/ word_score_left.size.to_f, word_dec_right.sum/ word_score_right.size.to_f,  word_score_left.sum / word_score_left.size.to_f, word_score_right.sum / word_score_right.size.to_f, word_ear_adv_score.sum / word_ear_adv_score.size.to_f]
        end
        wb.add_worksheet(name: "Week Three") do |sheet|
            sheet.add_row ["Test Number", "Client name", "Test type", "Left Ear Decibel Level", "Right Ear Decibel Level", "Left Ear Percentage Score", "Right Ear Percentage Score", "Ear Advantage Score"]
            rddt_dec_left = []
            rddt_dec_right = []
            word_dec_left = []
            word_dec_right = []
            rddt_score_left = []
            rddt_score_right = []
            word_score_left = []
            word_score_right = []
            rddt_ear_adv_score = []
            word_ear_adv_score = []
            @client.week_threes.each do |week_three|
                if week_three.test_type == "RDDT"
                    sheet.add_row [week_three.id, week_three.client_name, week_three.test_type, week_three.left_ear_decibel, week_three.right_ear_decibel, week_three.left_score, week_three.right_score, week_three.ear_advantage_score]
                    rddt_dec_left << week_three.left_ear_decibel if week_three.left_ear_decibel
                    rddt_dec_right << week_three.right_ear_decibel if week_three.right_ear_decibel
                    rddt_score_left << week_three.left_score if week_three.left_score
                    rddt_score_right << week_three.right_score if week_three.right_score
                    rddt_ear_adv_score << week_three.ear_advantage_score if week_three.ear_advantage_score
                end
            end
            sheet.add_row [nil, nil, nil, "Average Left Ear Decibel Level (DIGITS)", "Average Right Ear Decibel Level (DIGITS)", "Average Left Ear Percentage Score (DIGITS)", "Average Right Ear Percentage Score (DIGITS)", "Average Ear Advantage Score (DIGITS)"]
            sheet.add_row [nil,nil, nil, rddt_dec_left.sum/ rddt_score_left.size.to_f, rddt_dec_right.sum/ rddt_score_right.size.to_f,  rddt_score_left.sum / rddt_score_left.size.to_f, rddt_score_right.sum / rddt_score_right.size.to_f, rddt_ear_adv_score.sum / rddt_ear_adv_score.size.to_f]
            @client.week_threes.each do |week_three|
                if week_three.test_type != "RDDT"
                    sheet.add_row [week_three.id, week_three.client_name, week_three.test_type, week_three.left_ear_decibel, week_three.right_ear_decibel, week_three.left_score, week_three.right_score, week_three.ear_advantage_score]   
                    word_dec_left << week_three.left_ear_decibel if week_three.left_ear_decibel
                    word_dec_right << week_three.left_ear_decibel if week_three.left_ear_decibel
                    word_score_left << week_three.left_score if week_three.left_score
                    word_score_right << week_three.right_score if week_three.right_score
                    word_ear_adv_score << week_three.ear_advantage_score if week_three.ear_advantage_score
                end
            end
            sheet.add_row [nil, nil, nil, "Average Left Ear Decibel Level (WORDS)", "Average Right Ear Decibel Level (WORDS)", "Average Left Ear Percentage Score (WORDS)", "Average Right Ear Percentage Score (WORDS)", "Average Ear Advantage Score (WORDS)"]
            sheet.add_row [nil,nil, nil, word_dec_left.sum/ word_score_left.size.to_f, word_dec_right.sum/ word_score_right.size.to_f,  word_score_left.sum / word_score_left.size.to_f, word_score_right.sum / word_score_right.size.to_f, word_ear_adv_score.sum / word_ear_adv_score.size.to_f]
        end
        wb.add_worksheet(name: "Week Four") do |sheet|
            sheet.add_row ["Test Number", "Client name", "Test type", "Left Ear Decibel Level", "Right Ear Decibel Level", "Left Ear Percentage Score", "Right Ear Percentage Score", "Ear Advantage Score"]
            rddt_dec_left = []
            rddt_dec_right = []
            word_dec_left = []
            word_dec_right = []
            rddt_score_left = []
            rddt_score_right = []
            word_score_left = []
            word_score_right = []
            rddt_ear_adv_score = []
            word_ear_adv_score = []
            @client.week_fours.each do |week_four|
                if week_four.test_type == "RDDT"
                    sheet.add_row [week_four.id, week_four.client_name, week_four.test_type, week_four.left_ear_decibel, week_four.right_ear_decibel, week_four.left_score, week_four.right_score, week_four.ear_advantage_score]
                    rddt_dec_left << week_four.left_ear_decibel if week_four.left_ear_decibel
                    rddt_dec_right << week_four.right_ear_decibel if week_four.right_ear_decibel
                    rddt_score_left << week_four.left_score if week_four.left_score
                    rddt_score_right << week_four.right_score if week_four.right_score
                    rddt_ear_adv_score << week_four.ear_advantage_score if week_four.ear_advantage_score
                end
            end
            sheet.add_row [nil, nil, nil, "Average Left Ear Decibel Level (DIGITS)", "Average Right Ear Decibel Level (DIGITS)", "Average Left Ear Percentage Score (DIGITS)", "Average Right Ear Percentage Score (DIGITS)", "Average Ear Advantage Score (DIGITS)"]
            sheet.add_row [nil,nil, nil, rddt_dec_left.sum/ rddt_score_left.size.to_f, rddt_dec_right.sum/ rddt_score_right.size.to_f,  rddt_score_left.sum / rddt_score_left.size.to_f, rddt_score_right.sum / rddt_score_right.size.to_f, rddt_ear_adv_score.sum / rddt_ear_adv_score.size.to_f]
            @client.week_fours.each do |week_four|
                if week_four.test_type != "RDDT"
                    sheet.add_row [week_four.id, week_four.client_name, week_four.test_type, week_four.left_ear_decibel, week_four.right_ear_decibel, week_four.left_score, week_four.right_score, week_four.ear_advantage_score]   
                    word_dec_left << week_four.left_ear_decibel if week_four.left_ear_decibel
                    word_dec_right << week_four.left_ear_decibel if week_four.left_ear_decibel
                    word_score_left << week_four.left_score if week_four.left_score
                    word_score_right << week_fpur.right_score if week_four.right_score
                    word_ear_adv_score << week_four.ear_advantage_score if week_four.ear_advantage_score
                end
            end
            sheet.add_row [nil, nil, nil, "Average Left Ear Decibel Level (WORDS)", "Average Right Ear Decibel Level (WORDS)", "Average Left Ear Percentage Score (WORDS)", "Average Right Ear Percentage Score (WORDS)", "Average Ear Advantage Score (WORDS)"]
            sheet.add_row [nil,nil, nil, word_dec_left.sum/ word_score_left.size.to_f, word_dec_right.sum/ word_score_right.size.to_f,  word_score_left.sum / word_score_left.size.to_f, word_score_right.sum / word_score_right.size.to_f, word_ear_adv_score.sum / word_ear_adv_score.size.to_f]
        end
    respond_to do |format|
        format.xlsx {
            filename = "#{@client.full_name}_trainings.xlsx"
            send_data p.to_stream.read,
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            filename: filename
        }
        end
    end
end