import { gettext } from "@nextgisweb/pyramid/i18n";

import TrendingFlatIcon from "@nextgisweb/icon/material/trending_flat";

import "./CEAddon.less";

const url = `https://nextgis.com/redirect/${ngwConfig.locale}/nx72qrm4`;

export function CEAddon() {
  return (
    <div className="ngw-community-ce-addon">
      <div className="title">
        NextGIS Web CE {ngwConfig.distribution?.version}
      </div>
      <a className="link" href={url} target="_blank">
        {gettext("More features and direct support from NextGIS")}{" "}
        <TrendingFlatIcon />
      </a>
    </div>
  );
}
