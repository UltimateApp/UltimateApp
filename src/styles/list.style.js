import theme from '../styles/theme.style';

export const contentContainer = {
  paddingBottom: 40,
};

export const item = {
  height: 80,
  flexDirection: 'row',
  marginBottom: 20,
};
export const custom = {
  backgroundColor: theme.MAIN_COLOR_TRANSPARENT,
  borderRadius: 5,
};
export const image = {
  width: 80,
  height: 80,
  marginRight: 10,
  borderRadius: 5,
  padding: 10,
  backgroundColor: 'rgb(0,0,0)',
  justifyContent: 'center',
  alignItems: 'center',
};
export const imageOpacity = {
  borderRadius: 5,
  opacity: 0.5,
};
export const imageText = {
  textAlign: 'center',
  color: theme.COLOR_SECONDARY_LIGHT,
  fontSize: theme.FONT_SIZE_SMALL,
};
export const imageTextMain = {
  fontSize: theme.FONT_SIZE_MEDIUM,
};
export const itemContentContainer = {
  flex: 1,
  padding: 5,
  paddingBottom: 10,
  paddingRight: 10,
};
export const title = {
  flex: 3,
  fontWeight: 'bold',
  fontSize: theme.FONT_SIZE_MEDIUM,
  flexWrap: 'wrap',
};
export const source = {
  flex: 2,
  color: theme.COLOR_SECONDARY,
  fontSize: theme.FONT_SIZE_SMALL,
};
export const numberOfPlayers = {
  flex: 2,
  color: theme.COLOR_SECONDARY,
  fontSize: theme.FONT_SIZE_SMALL,
};
