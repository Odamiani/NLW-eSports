import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';
import { Background } from '../Background';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.OVERLAY,
  },
  content: {
    width: 311,
    backgroundColor: THEME.COLORS.SHAPE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  closeIcon:{
    alignSelf: 'flex-end',
    margin: 16,
  },
  labelText:{
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.MD,
    marginTop: 24,
    marginBottom: 8
  },
  buttonDiscord:{
    width: 231,
    height: 48,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    borderRadius: 4,
    marginBottom: 32,
  },
  discord: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
  }
});