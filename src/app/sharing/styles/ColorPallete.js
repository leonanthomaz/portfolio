import { createContext, useContext } from 'react';

const ColorPaletteContext = createContext();

export const useColorPalette = () => useContext(ColorPaletteContext);

export const ColorPaletteProvider = ({ children, palette }) => {
  return (
    <ColorPaletteContext.Provider value={palette}>
      {children}
    </ColorPaletteContext.Provider>
  );
};
