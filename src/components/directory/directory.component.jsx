import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Computers & Accessories",
          imageUrl:
            "https://i.ibb.co/K0Lp4T0/onur-binay-4-Ykxp-t4i08-unsplash.jpg",
          id: 1,
          linkUrl: "ComputerAccessories",
        },
        {
          title: "Electronics",
          imageUrl:
            "https://i.ibb.co/mRVCXMC/altumcode-Ui3z-Mjp-Mrm-M-unsplash.jpg",
          id: 2,
          linkUrl: "",
        },
        {
          title: "Gaming accessories",
          imageUrl:
            "https://i.ibb.co/FmDSZGJ/florian-olivo-Mf23-RF8x-Ar-Y-unsplash.jpg",
          id: 3,
          linkUrl: "",
        },
        {
          title: "VR",
          imageUrl:
            "https://i.ibb.co/qJZQ3xg/vinicius-amnx-amano-Mv-Jezf8-FT4o-unsplash.jpg",
          size: "large",
          id: 4,
          linkUrl: "",
        },
        {
          title: "Kitchen Gadget",
          imageUrl:
            "https://i.ibb.co/wrvxmT7/jason-briscoe-Glia-HAJ3-5-A-unsplash.jpg",
          size: "large",
          id: 5,
          linkUrl: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
