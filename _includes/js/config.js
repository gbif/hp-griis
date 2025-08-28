/*
This is the fil in which you configure the data widgets. Feel free to experiment with the configuration options. 
But it is also completely okay to write and issue and ask for help to configure the widgets.
You probably want to check out the documentation at https://hp-theme.gbif-staging.org/documentation-intro
*/
var siteConfig = {
  "version": 3,
  "pages": [ // which pages do we want to enable
    {
      "id": "occurrenceSearch"
    },
    {
      "id": "occurrenceKey"
    },
    {
      "id": "datasetSearch"
    },
    {
      "id": "datasetKey"
    },
    {
      "id": "literatureSearch"
    }
  ],
  "disableInlineTableFilterButtons": false,
  "availableCatalogues": [
    // TODO: you should remove types you do not want to use
    "OCCURRENCE",
    "DATASET",
    "LITERATURE"
  ],
  "dataHeader": {
    "enableApiPopup": false,
    "enableInfoPopup": false
  },
  "theme": {
    "primary": "#001972",
    "borderRadius": 3,
    "stickyOffset": "0px"
  },
  "maps": {
    "mapStyles": {
      "defaultProjection": "MERCATOR",
      "defaultMapStyle": "BRIGHT",
      "options": {
        "MERCATOR": [
          "BRIGHT",
          "NATURAL"
        ]
      }
    }
  },
  "languages": [
    {
      "code": "en",
      "localeCode": "en",
      "label": "English",
      "default": true,
      "textDirection": "ltr",
      "iso3LetterCode": "eng",
      "cmsLocale": "en-GB",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    }
  ],
  "messages": {},
  "occurrenceSearch": {
    "scope": {
      "type": "in",
      "key": "publishingOrg",
      "values": [
        "cdef28b1-db4e-4c58-aa71-3c5238c2d0b5",
      ]
    },
    "highlightedFilters": [
      "taxonKey",
      "country",
      "recordedBy",
      "identifiedBy"
    ],
    "excludedFilters": [
      "datasetId",
      "datasetName",
      "occurrenceStatus",
      "networkKey",
      "hostingOrganizationKey",
      "publishingOrg",
      "publishedByGbifRegion",
      "protocol",
      "publishingCountry",
      "institutionCode",
      "collectionCode",
      "collectionKey",
      "institutionKey",
    ],
    "defaultEnabledTableColumns": [
      "features",
      "country",
      "year",
      "eventDate",
      "datasetKey",
    ],
    "tabs": [
      "table",
      // "gallery",
      // "map",
      // "clusters",
      "dashboard",
      "download"
    ],
    "mapSettings": {
      "lat": 52,
      "lng": 12,
      "zoom": 4.911544076366507
    }
  },
  "datasetSearch": {
    excludedFilters: ['publishingCountry', 'networkKey', 'projectId', 'hostingOrg'],
    highlightedFilters: ['q', 'type', 'publishingOrg', 'license'],
    scope: {
      // TODO: you should add a scope here if you need search to be limited to a subset
      // search filters have the format {field: [values]}
      publishingOrg: ['cdef28b1-db4e-4c58-aa71-3c5238c2d0b5']
    },
  },
  "publisherSearch": {},
  "literatureSearch": {
    "scope": {
      // TODO: you should add a scope here if you need search to be limited to a subset
      // literature search use the predicate format similar to occurrence search
      "type": "in",
      "key": "publishingOrganizationKey",
      "values": [
        "cdef28b1-db4e-4c58-aa71-3c5238c2d0b5"
      ]
    }
  }
}