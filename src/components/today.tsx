'use client'

import Circle from './circle'

type TodayProps  = {
  icon?: 'up' | 'down' 
}

const Today: React.FunctionComponent<TodayProps> = ({ icon }) => (
  <div className="thong-ke-ti-le">
    <div className="item"
      style={{
        '--color': '#4a9db4'
      }}
    >
      <div className="head">
        <div className="head__icon"></div>
        <div className="head__value">Level Activity</div>
      </div>
      <div className="sub-head">Your General Goal Achievements</div>
      <div className="section">
        <div className="value">38%</div>
        <div className="chart">
          <Circle value={100} icon='up' />
        </div>
      </div>
    </div>
    <div className="separator" />
    <div
      className="item"
      style={{
        '--color': '#e65953'
      }}
    >
      <div className="head">
        <div className="head__icon"></div>
        <div className="head__value">Success Endurance</div>
      </div>
      <div className="sub-head">Your General Endurance success</div>
      <div className="section">
        <div className="value">54%</div>
        <div className="chart">
          <Circle value={5} icon='down' />
        </div>
      </div>
    </div>
  </div>
);

export default Today;
