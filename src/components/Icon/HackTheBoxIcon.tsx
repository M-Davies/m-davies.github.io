import {FC, memo} from "react";

import {IconProps} from "./Icon";
import {Icon} from '@iconify/react';

const HackTheBox: FC<IconProps> = memo(() => (
  <Icon icon="simple-icons:hackthebox" width="26" height="26" />
));

export default HackTheBox;
