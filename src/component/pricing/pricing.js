import React from "react";
import '../pricing/pricing.css'
let Pricing = () => {
  return (
    <div className="row">
      <div className="col-md-4 col-sm-6">
        <div className="pricing-table-3 basic">
          <div className="pricing-table-header">
            <h4><strong>BASIC</strong></h4>
            <p>Lorem Ipsum Dolor Sit Amet</p>
          </div>
          <div className="price"><strong>$3</strong> / MONTH</div>
          <div className="pricing-body">
            <ul className="pricing-table-ul">
              <li><i className="fa fa-send"></i> Unlimited Email Addresses</li>
              <li><i className="fa fa-cloud"></i> 50 GB Disk Space</li>
              <li><i className="fa fa-database"></i> Unlimited MySQL Database</li>
              <li className="not-avail"><i className="fa fa-clock-o"></i> 24X7 Support</li>
              <li className="not-avail"><i className="fa fa-envelope"></i> Email Support</li>
            </ul>
            <a href="#" className="view-more">View More</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="pricing-table-3 premium">
          <div className="pricing-table-header">
            <h4><strong>PREMIUM</strong></h4>
            <p>Lorem Ipsum Dolor Sit Amet</p>
          </div>
          <div className="price"><strong>$8</strong> / MONTH</div>
          <div className="pricing-body">
            <ul className="pricing-table-ul">
              <li><i className="fa fa-send"></i> Unlimited Email Addresses</li>
              <li><i className="fa fa-cloud"></i> 80 GB Disk Space</li>
              <li><i className="fa fa-database"></i> Unlimited MySQL Database</li>
              <li className="not-avail"><i className="fa fa-clock-o"></i> 24X7 Support</li>
              <li className="not-avail"><i className="fa fa-envelope"></i> Email Support</li>
            </ul>
            <a href="#" className="view-more">View More</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-12">
        <div className="pricing-table-3 business">
          <div className="pricing-table-header">
            <h4><strong>BUSINESS</strong></h4>
            <p>Lorem Ipsum Dolor Sit Amet</p>
          </div>
          <div className="price"><strong>$12</strong> / MONTH</div>
          <div className="pricing-body">
            <ul className="pricing-table-ul">
              <li><i className="fa fa-send"></i> Unlimited Email Addresses</li>
              <li><i className="fa fa-cloud"></i> 120 GB Disk Space</li>
              <li><i className="fa fa-database"></i> Unlimited MySQL Database</li>
              <li className="not-avail"><i className="fa fa-clock-o"></i> 24X7 Support</li>
              <li className="not-avail"><i className="fa fa-envelope"></i> Email Support</li>
            </ul>
            <a href="#" className="view-more">View More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
