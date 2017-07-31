class SelectBots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bots: {
        '-1': 'Seek & Destroy',
        '-2': 'Camper'
      }
    };
    this.showBots = this.showBots.bind(this);
  }

  showBots() {
    list = Object.keys(this.state.bots).map((key) =>
      <div className="form-group">
        <label htmlFor="bot-{key}">{this.state.bots[key]}</label>
        <input type="number" min="0" max="5" className="form-control" id="bot-{key}" />
      </div>
    );
    return <div>
             {list}
           </div>
  }

  render() {
    var csrf = document.getElementsByName('csrf-token')[0].getAttribute('content');
    return (
      <form method="post" action="/authenticate">
        <input type="hidden" name="authenticity_token" value={ csrf } />
        {this.showBots()}
        <div className="btn-group">
          <button className="btn btn-primary" id="startBattle" type="submit">Battle</button>
        </div>
      </form>
    );
  }
}
