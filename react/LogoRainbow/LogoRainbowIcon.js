import React from 'react';
import PropTypes from 'prop-types';

const RainbowLogoIcon = () => (
  <g transform="translate(2.5,2.5), scale(1.02)">
    <path
      fill="#750787"
      d="M54.64 52.182H7.98c5.733 6.402 14.058 10.436 23.33 10.436s17.596-4.034 23.33-10.436z"
    />
    <path
      fill="#004DFF"
      d="M7.98 52.182h46.66c2.696-3.012 4.815-6.547 6.19-10.438H1.79c1.374 3.89 3.493 7.426 6.19 10.438z"
    />
    <path
      fill="#008026"
      d="M60.83 41.745c1.154-3.264 1.79-6.775 1.79-10.436H0c0 3.66.633 7.17 1.79 10.435h59.04z"
    />
    <path
      fill="#FFED00"
      d="M1.787 20.872C.633 24.137 0 27.648 0 31.31h62.62c0-3.66-.636-7.173-1.79-10.438H1.787z"
    />
    <path
      fill="#FF8C00"
      d="M1.787 20.872H60.83c-1.375-3.89-3.492-7.425-6.188-10.436H7.977c-2.696 3.01-4.815 6.547-6.19 10.436z"
    />
    <path
      fill="#E40303"
      d="M7.977 10.437h46.666C48.91 4.033 40.583 0 31.31 0c-9.273 0-17.6 4.033-23.333 10.437z"
    />
    <g fill="#FFF">
      <path d="M32.05 11.532c0-1.082.872-1.958 1.952-1.958 1.084 0 1.96.876 1.96 1.958 0 1.078-.876 1.955-1.96 1.955-1.08 0-1.952-.877-1.952-1.955zM38.137 18.11c0-1.193.967-2.16 2.154-2.16 1.196 0 2.163.967 2.163 2.16 0 1.19-.967 2.158-2.162 2.158-1.186 0-2.153-.967-2.153-2.157zM32.05 18.11c0-1.08.872-1.956 1.952-1.956 1.084 0 1.96.875 1.96 1.957 0 1.08-.876 1.957-1.96 1.957-1.08 0-1.952-.878-1.952-1.956zM44.617 24.71c0-1.34 1.082-2.423 2.426-2.423 1.34 0 2.42 1.083 2.42 2.424 0 1.34-1.08 2.423-2.42 2.423-1.344 0-2.426-1.084-2.426-2.422zM38.137 24.69c0-1.192.967-2.158 2.154-2.158 1.196 0 2.163.965 2.163 2.157 0 1.19-.967 2.155-2.162 2.155-1.186 0-2.153-.964-2.153-2.156zM32.05 24.69c0-1.08.872-1.956 1.952-1.956 1.084 0 1.96.875 1.96 1.955s-.876 1.957-1.96 1.957c-1.08 0-1.952-.876-1.952-1.958zM26.232 24.69c0-.945.766-1.71 1.713-1.71s1.713.765 1.713 1.71-.766 1.712-1.713 1.712-1.713-.767-1.713-1.713zM21.383 24.69c0-.81.656-1.47 1.468-1.47.81 0 1.467.66 1.467 1.47 0 .81-.656 1.468-1.466 1.468-.81 0-1.467-.658-1.467-1.47zM16.76 24.69c0-.678.547-1.224 1.223-1.224.68 0 1.225.545 1.225 1.223s-.546 1.224-1.225 1.224c-.676 0-1.223-.548-1.223-1.225zM12.846 24.69c0-.542.44-.978.982-.978.537 0 .98.437.98.977 0 .543-.442.978-.98.978-.54 0-.982-.435-.982-.98zM9.143 24.69c0-.406.327-.734.733-.734s.733.328.733.733c0 .406-.328.734-.734.734s-.733-.328-.733-.735zM6.012 24.69c0-.272.22-.488.49-.488s.486.216.486.487c0 .27-.217.49-.485.49-.27 0-.49-.22-.49-.49zM44.617 31.288c0-1.336 1.082-2.425 2.426-2.425 1.34 0 2.42 1.09 2.42 2.425 0 1.34-1.08 2.42-2.42 2.42-1.344 0-2.426-1.08-2.426-2.42zM38.137 31.268c0-1.193.967-2.156 2.154-2.156 1.196 0 2.163.963 2.163 2.156 0 1.192-.967 2.16-2.162 2.16-1.186-.002-2.153-.968-2.153-2.16zM32.05 31.268c0-1.084.872-1.957 1.952-1.957 1.084 0 1.96.874 1.96 1.958 0 1.08-.876 1.956-1.96 1.956-1.08 0-1.952-.877-1.952-1.956zM26.232 31.268c0-.946.766-1.71 1.713-1.71s1.713.764 1.713 1.71-.766 1.71-1.713 1.71-1.713-.764-1.713-1.71zM21.383 31.268c0-.812.656-1.468 1.468-1.468.81 0 1.467.656 1.467 1.468 0 .81-.656 1.467-1.466 1.467-.81 0-1.467-.66-1.467-1.467zM16.76 31.268c0-.678.547-1.222 1.223-1.222.68 0 1.225.544 1.225 1.222 0 .677-.546 1.225-1.225 1.225-.676 0-1.223-.55-1.223-1.225zM12.846 31.268c0-.542.44-.98.982-.98.537 0 .98.438.98.98 0 .54-.442.978-.98.978-.54 0-.982-.437-.982-.978zM9.143 31.268c0-.405.327-.732.733-.732s.733.327.733.732c0 .406-.328.73-.734.73s-.733-.324-.733-.73zM6.012 31.268c0-.27.22-.49.49-.49s.486.22.486.49-.217.49-.485.49c-.27 0-.49-.22-.49-.49zM51.264 31.33c0-1.465 1.193-2.653 2.654-2.653 1.466 0 2.652 1.188 2.652 2.654 0 1.467-1.187 2.653-2.652 2.653-1.46 0-2.654-1.186-2.654-2.652zM44.617 37.864c0-1.336 1.082-2.422 2.426-2.422 1.34 0 2.42 1.086 2.42 2.422 0 1.342-1.08 2.426-2.42 2.426-1.344 0-2.426-1.084-2.426-2.426zM38.137 37.848c0-1.193.967-2.16 2.154-2.16 1.196 0 2.163.967 2.163 2.16 0 1.19-.967 2.156-2.162 2.156-1.186 0-2.153-.966-2.153-2.156zM32.05 37.848c0-1.082.872-1.96 1.952-1.96 1.084 0 1.96.878 1.96 1.96 0 1.08-.876 1.955-1.96 1.955-1.08 0-1.952-.875-1.952-1.955zM26.232 37.848c0-.947.766-1.717 1.713-1.717s1.713.77 1.713 1.718-.766 1.71-1.713 1.71-1.713-.763-1.713-1.71zM21.383 37.848c0-.812.656-1.47 1.468-1.47.81 0 1.467.657 1.467 1.47 0 .81-.656 1.467-1.466 1.467-.81 0-1.467-.656-1.467-1.467zM16.76 37.848c0-.68.547-1.223 1.223-1.223.68 0 1.225.543 1.225 1.223 0 .676-.546 1.22-1.225 1.22-.676 0-1.223-.544-1.223-1.22zM12.846 37.848c0-.54.44-.98.982-.98.537 0 .98.44.98.98s-.442.98-.98.98c-.54 0-.982-.44-.982-.98zM9.143 37.848c0-.406.327-.736.733-.736s.733.33.733.736c0 .404-.328.732-.734.732s-.733-.328-.733-.732zM6.012 37.848c0-.27.22-.492.49-.492s.486.22.486.492c0 .268-.217.484-.485.484-.27 0-.49-.216-.49-.484zM38.137 44.428c0-1.195.967-2.162 2.154-2.162 1.196 0 2.163.967 2.163 2.162 0 1.19-.967 2.156-2.162 2.156-1.186 0-2.153-.964-2.153-2.156zM32.05 44.428c0-1.082.872-1.963 1.952-1.963 1.084 0 1.96.88 1.96 1.963 0 1.078-.876 1.955-1.96 1.955-1.08 0-1.952-.877-1.952-1.955zM32.05 51.002c0-1.078.872-1.953 1.952-1.953 1.084 0 1.96.874 1.96 1.952 0 1.082-.876 1.96-1.96 1.96-1.08 0-1.952-.878-1.952-1.96z" />
    </g>
  </g>
);

RainbowLogoIcon.propTypes = {
  iconClass: PropTypes.string,
  fill: PropTypes.string
};

export default RainbowLogoIcon;
