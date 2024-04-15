import React, {useState} from "react";

// Font Awsome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Card Images
import CardImage3 from '../assets/images/NBA_cards/card3.webp';

function TopSales() {
  const styles = {
    TableHeadBackground:{
      backgroundColor: "#000",
    },
    ListImage:{
      width: "50px",
    },
  };

  return (
    <>
      <section className="top_sales_section css-grap20 container-fluid">
        <div class="top_sales_headtitle">
          <h2>WEEKLY TOP SALES</h2>
        </div>
        <div class="table-responsive">
          <table class="table table-dark table-borderless">
            <thead>
              <tr>
                <th scope="col" style={styles.TableHeadBackground}></th>
                <th scope="col" style={styles.TableHeadBackground}>Moment</th>
                <th scope="col" style={styles.TableHeadBackground}>Price</th>
                <th scope="col" style={styles.TableHeadBackground}>Date/Time</th>
                <th scope="col" style={styles.TableHeadBackground}>Serial</th>
                <th scope="col" style={styles.TableHeadBackground}>Buyer</th>
                <th scope="col" style={styles.TableHeadBackground}>Seller</th>
                <th scope="col" style={styles.TableHeadBackground}>TX</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr>
                <td><img src={CardImage3} style={styles.ListImage} alt="..." /></td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td><a href="#" target="_blank"><FontAwesomeIcon icon={faSearch} /></a></td>
              </tr>
              <tr>
                <td><img src={CardImage3} style={styles.ListImage} alt="..." /></td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@israel</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@israel</td>
                <td><a href="#" target="_blank"><FontAwesomeIcon icon={faSearch} /></a></td>
              </tr>
              <tr>
                <td><img src={CardImage3} style={styles.ListImage} alt="..." /></td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@israel</td>
                <td><a href="#" target="_blank"><FontAwesomeIcon icon={faSearch} /></a></td>
              </tr>
              <tr>
                <td><img src={CardImage3} style={styles.ListImage} alt="..." /></td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@israel</td>
                <td><a href="#" target="_blank"><FontAwesomeIcon icon={faSearch} /></a></td>
              </tr>
              <tr>
                <td><img src={CardImage3} style={styles.ListImage} alt="..." /></td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@israel</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@israel</td>
                <td><a href="#" target="_blank"><FontAwesomeIcon icon={faSearch} /></a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
};

export default TopSales;