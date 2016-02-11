import logging
from django.conf import settings

fomt = getattr(settings, 'LOG_FORMAT', None)
levl = getattr(settings, 'LOG_LEVEL', logging.DEBUG)

logging.basicConfig(format=fomt, level=levl)
logging.debug("Logging started on %s for %s" % (logging.root.name, logging.getLevelName(levl)))