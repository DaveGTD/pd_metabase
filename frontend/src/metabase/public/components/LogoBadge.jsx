/* @flow */

import React from "react";
import LogoIcon from "metabase/components/LogoIcon";

import cx from "classnames";

type Props = {
    dark: bool,
}

const LogoBadge = ({ dark }: Props) =>
    <a href="https://plenadata.com">
            Plena Data
    </a>

export default LogoBadge;
