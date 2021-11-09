import * as React from 'react';
import Switch from 'react-switch';

type ToggleSwitchProps = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = (props: ToggleSwitchProps) => {
  return (
    <label htmlFor="show-liked-toggle-switch" className="mt-3 justify-self-end">
      <Switch
        onChange={() => props.setToggle(!props.toggle)}
        checked={props.toggle}
        onColor="#6FEA99"
        onHandleColor="#6FEA99"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={48}
      />
    </label>
  );
};

export default ToggleSwitch;
