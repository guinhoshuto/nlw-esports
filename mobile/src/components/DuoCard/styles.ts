import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        width: 200,
        borderRadius: 8,
        backgroundColor: THEME.COLORS.SHAPE,
        padding: 20,
        marginRight: 16,
        alignItems: 'center'
    },
    button: {
        width: 140,
        height: 36,
        borderRadius: 6,
        backgroundColor: THEME.COLORS.PRIMARY,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonTitle: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
        fontSize: THEME.FONT_SIZE.SM,
        margiLeft: 8
    }
})