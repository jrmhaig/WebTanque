require 'rails_helper'

RSpec.describe Api::BattleController, type: :controller do
  describe 'POST #index' do
    it 'returns http success' do
      post :match, params: { }, format: :json
      expect(response).to have_http_status(:success)
    end
  end
end
