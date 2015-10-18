import React from "react";
import BudgetNav from "./BudgetNav";
import BudgetPanel from "./BudgetPanel";

export default React.createClass({
  render: function() {
    return (
      <div className="budget">
        <BudgetNav />
        <BudgetPanel title="Une carte cartoDB" type="cartoDB" dataset="https://rimthong.cartodb.com/viz/09e8dd9c-75b9-11e5-ac2f-0ea31932ec1d/embed_map" />
        <BudgetPanel title="Un graphe" type="graph" dataset="" />
        <BudgetPanel title="Une representation drill down" type="drilldown" dataset="" />
      </div>
    );
  },
});
