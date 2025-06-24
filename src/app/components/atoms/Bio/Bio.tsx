import TH from '../TextHighlight/TextHighlight';

const Bio = () => {
  return (
    <div className="text-md text-wrap max-w-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque{' '}
      <TH color="text-amber-500" size="text-lg">
        lobortis
      </TH>{' '}
      nisl, eget gravida mauris. Nam ut eros porta mi lobortis euismod. Proin
      laoreet laoreet odio et placerat. Suspendisse potenti. Vestibulum lacinia
      a ante quis tempor. In hac habitasse platea dictumst. Integer gravida
      lorem elementum ligula tristique, et dignissim ipsum tincidunt. Nam
      tincidunt risus gravida odio{' '}
      <TH color="text-yellow-400" size="text-xl" face="font-semibold">
        tincidunt
      </TH>
      , nec tincidunt mauris ornare. Etiam eu est fringilla, tincidunt lacus
      sed, tristique mi. Etiam non libero lobortis sem rutrum rhoncus aliquet in
      sem. Phasellus et ultrices turpis. Mauris dictum porta ultrices. Nam
      efficitur tellus sit amet nunc euismod, non cursus mauris sodales. Vivamus
      posuere leo in urna euismod, sed convallis metus viverra. Aliquam ac
      porttitor ante, id venenatis purus. Proin fermentum, lacus quis ultrices
      hendrerit, felis ligula lobortis elit, vitae ultricies felis odio sagittis
      ex.
    </div>
  );
};

export default Bio;
