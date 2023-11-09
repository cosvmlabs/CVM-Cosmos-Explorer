import LinearProgress from '@mui/material/LinearProgress';
import { useRecoilValue } from 'recoil';
import BigDipperLogoRed from 'shared-utils/assets/big-dipper-red.svg';
import BigDipperLogoWhite from 'shared-utils/assets/big-dipper-white.svg';
import BigDipperLogo from 'shared-utils/assets/big-dipper.png';
import Image, { type ImageProps } from 'next/image';
import useStyles from '@/screens/initial_load/styles';
import { readTheme } from '@/recoil/settings';
import ChainIcon from '@/components/ChainIcon';

const InitialLoad = () => {
  const theme = useRecoilValue(readTheme);
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <ChainIcon type="icon" className={classes.logo} alt="logo" />
        <LinearProgress className={classes.divider} />
        {/* {theme === 'light' ? <BigDipperLogoRed /> : <BigDipperLogoWhite />} */}
        <Image width={0} height={0} src={BigDipperLogo}  unoptimized />
      </div>
    </div>
  );
};

export default InitialLoad;
