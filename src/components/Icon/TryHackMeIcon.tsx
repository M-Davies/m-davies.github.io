import {FC, memo} from "react";

import {IconProps} from "./Icon";
import { Icon } from '@iconify/react';

const TryHackMeIcon: FC<IconProps> = memo(() => (
  <Icon icon="simple-icons:tryhackme" width="26" height="26" />
));

export default TryHackMeIcon;
