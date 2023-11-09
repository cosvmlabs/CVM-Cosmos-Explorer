import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import BigDipperLogoRed from 'shared-utils/assets/big-dipper-red.svg';
import BigDipperLogoWhite from 'shared-utils/assets/big-dipper-white.svg';
import BigDipperLogo from 'shared-utils/assets/big-dipper.png';
import Image, { type ImageProps } from 'next/image';
import Box from '@/components/box';
import useStyles from '@/components/nav/components/desktop/components/action_bar/components/network_list/styles';
import Networks from '@/components/nav/components/networks';
import { readTheme } from '@/recoil/settings';

type NetworkListProps = {
  className?: string;
  actionHeight?: number;
};

const NetworkList: FC<NetworkListProps> = ({ className, actionHeight }) => {
  const { classes, cx } = useStyles();
  const theme = useRecoilValue(readTheme);

  return (
    <Box className={cx(classes.root, className)}>
      <div
        style={{
          height: actionHeight,
        }}
      >
        {/* {theme === 'light' ? <BigDipperLogoRed /> : <BigDipperLogoWhite />} */}
        <Image width={0}  src={BigDipperLogo} optimized />
      </div>
      {/* <Networks className={classes.content} /> */}
    </Box>
  );
};

export default NetworkList;
