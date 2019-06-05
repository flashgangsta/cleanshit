export default class MappingManager {
  static setScaleFillArea(targetRect, areaRect) {
    const scale = Math.max(
      areaRect.width / targetRect.width,
      areaRect.height / targetRect.height
    );

    targetRect.width = targetRect.width * scale;
    targetRect.height = targetRect.height * scale;

    MappingManager.roundSides(targetRect);

    return targetRect;
  }

  static alignToCenter(targetRect, areaRect, neededRoundPosition = true) {
    targetRect.x = areaRect.x + (areaRect.width - targetRect.width) / 2;
    targetRect.y = areaRect.y + (areaRect.height - targetRect.height) / 2;

    if (neededRoundPosition) {
      MappingManager.roundPositionPoint(targetRect);
    }

    return targetRect;
  }

  static roundSides(targetRect, method = Math.round) {
    targetRect.width = method(targetRect.width);
    targetRect.height = method(targetRect.height);
    return targetRect;
  }

  static roundPositionPoint(targetRect, methond = Math.round) {
    targetRect.x = methond(targetRect.x);
    targetRect.y = methond(targetRect.y);
    return targetRect;
  }
}
