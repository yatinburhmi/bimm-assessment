const DEFAULT_FALLBACK =
  "https://media.audi.com/is/image/audi/nemo/uk/models/q5-tfsi-e/2023-trims/mobile/q5_sportback_tfsie_sport_1280x1080px.png?width=1280";

type ResponsiveImageProps = {
  alt?: string;
  mobile?: string;
  tablet?: string;
  desktop?: string;
  fallbackSrc?: string;
  loading?: "lazy" | "eager";
  style?: React.CSSProperties;
  className?: string;
};

export const ResponsiveImage = ({
  alt,
  mobile,
  tablet,
  desktop,
  fallbackSrc = DEFAULT_FALLBACK,
  loading,
  className,
  style,
}: ResponsiveImageProps) => {
  const getBestSrc = () => desktop || tablet || mobile || fallbackSrc;
  return (
    <picture>
      {desktop && <source media="(min-width:1024px)" srcSet={desktop} />}
      {tablet && <source media="(min-width:640px)" srcSet={tablet} />}
      {mobile && <source media="(max-width: 639px" srcSet={mobile} />}
      <img
        src={getBestSrc()}
        alt={alt}
        loading={loading}
        className={className}
        style={{
          width: "100%",
          display: "block",
          objectFit: "cover",
          ...style,
        }}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = fallbackSrc;
        }}
      />
    </picture>
  );
};
