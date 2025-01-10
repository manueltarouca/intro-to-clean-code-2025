class DateUtils {
  private static readonly TAGS = ["years", "days", "hours", "minutes", "seconds"];
  private static readonly TAGS_SINGULAR = ["year", "day", "hour", "minute", "second"];
  private static readonly SECONDS_ARR = [31536000, 86400, 3600, 60, 1];

  private static formatDuration(seconds: number): string {
    let result: string[] = [];

    for (let i = 0; i < DateUtils.SECONDS_ARR.length && seconds !== 0; ++i) {
      const secondsTmp = Math.floor(seconds / DateUtils.SECONDS_ARR[i]);
      seconds = seconds % DateUtils.SECONDS_ARR[i];

      if (secondsTmp === 0) continue;

      const tag = secondsTmp > 1 ? DateUtils.TAGS[i] : DateUtils.TAGS_SINGULAR[i];
      result.push(`${secondsTmp} ${tag}`);
    }

    if (result.length > 1) {
      const last = result.pop();
      return result.join(", ") + " and " + last;
    } else {
      // Handle edge case where no duration exists
      return result[0] || "now";
    }
  }

  public static main(): void {
    console.log(DateUtils.formatDuration(3662));
  }
}

DateUtils.main();