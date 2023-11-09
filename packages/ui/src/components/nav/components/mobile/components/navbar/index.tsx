import useStyles from '@/components/nav/components/mobile/components/navbar/styles';
import type { NavbarProps } from '@/components/nav/components/mobile/components/navbar/types';
import useBigDipperNetworks from '@/hooks/useBigDipperNetworks';
import { readTheme } from '@/recoil/settings';
import { HOME } from '@/utils/go_to_page';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import BigDipperLogoRed from 'shared-utils/assets/big-dipper-red.svg';
import BigDipperLogoWhite from 'shared-utils/assets/big-dipper-white.svg';
import BigDipperLogo from 'shared-utils/assets/big-dipper.png';
import Image, { type ImageProps } from 'next/image';

const Navbar = (props: NavbarProps) => {
  const { classes, cx } = useStyles();
  const theme = useRecoilValue(readTheme);
  const { selectedName } = useBigDipperNetworks();
  const { isOpen, openNetwork, toggleNavMenus } = props;

  return (
    <div className={classes.root}>
      <Link shallow href={HOME} className={classes.a}>
        {/* {theme === 'light' ? (
          <BigDipperLogoRed className={classes.logo} />
        ) : (
          <BigDipperLogoWhite className={classes.logo} />
        )} */}
        <Image width={0} height={0} src={BigDipperLogo} className={classes.logo} unoptimized />
      </Link>
      <div className={classes.actions}>
        {/* =================================== */}
        {/* Network */}
        {/* =================================== */}
        <div
          className={classes.network}
          onClick={openNetwork}
          role="button"
          tabIndex={0}
          aria-label={selectedName}
        >
          <p className="text">{selectedName}</p>
          <ExpandMoreIcon fontSize="small" />
        </div>
        {/* =================================== */}
        {/* Hamburger */}
        {/* =================================== */}
        <div
          role="button"
          onClick={toggleNavMenus}
          className={cx(classes.hamburger, {
            active: isOpen,
          })}
          tabIndex={0}
          aria-label={isOpen ? 'close navigation menu' : 'open navigation menu'}
        >
          <div className="hamburger-content" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
